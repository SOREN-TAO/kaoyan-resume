import { useState, Children, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import './Stepper.css';

export default function Stepper({
  children,
  initialStep = 1,
  onStepChange = () => {},
  onFinalStepCompleted = () => {},
  backButtonText = '上一步',
  nextButtonText = '下一步',
  disableStepIndicators = false,
  renderStepIndicator,
  className = '',
  ...rest
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;
  const isCompleted = currentStep > totalSteps;
  const isLastStep = currentStep === totalSteps;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
    if (newStep > totalSteps) {
      onFinalStepCompleted();
    } else {
      onStepChange(newStep);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (!isLastStep) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  const handleComplete = () => {
    setDirection(1);
    updateStep(totalSteps + 1);
  };

  return (
    <div className={`stepper-outer ${className}`} {...rest}>
      <div className="stepper-card">
        {/* Step indicators */}
        <div className="stepper-indicator-row">
          {stepsArray.map((_, index) => {
            const stepNumber = index + 1;
            const isNotLastStep = index < totalSteps - 1;
            return (
              <div key={stepNumber} style={{ display: 'contents' }}>
                {renderStepIndicator ? (
                  renderStepIndicator({
                    step: stepNumber,
                    currentStep,
                    onStepClick: (clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    },
                  })
                ) : (
                  <StepIndicator
                    step={stepNumber}
                    disableStepIndicators={disableStepIndicators}
                    currentStep={currentStep}
                    onClickStep={(clicked) => {
                      setDirection(clicked > currentStep ? 1 : -1);
                      updateStep(clicked);
                    }}
                  />
                )}
                {isNotLastStep && <StepConnector isComplete={currentStep > stepNumber} />}
              </div>
            );
          })}
        </div>

        {/* Content */}
        <StepContentWrapper
          isCompleted={isCompleted}
          currentStep={currentStep}
          direction={direction}
        >
          {stepsArray[currentStep - 1]}
        </StepContentWrapper>

        {/* Footer */}
        {!isCompleted && (
          <div className={`stepper-footer ${currentStep === 1 ? 'end' : ''}`}>
            {currentStep > 1 && (
              <button onClick={handleBack} className="stepper-back-btn">
                <ChevronLeft size={14} />
                {backButtonText}
              </button>
            )}
            <button onClick={isLastStep ? handleComplete : handleNext} className="stepper-next-btn">
              {isLastStep ? '完成学习' : nextButtonText}
              {!isLastStep && <ChevronRight size={14} />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function StepContentWrapper({ isCompleted, currentStep, direction, children }) {
  const [parentHeight, setParentHeight] = useState(0);

  return (
    <motion.div
      className="stepper-content-area"
      animate={{ height: isCompleted ? 0 : parentHeight }}
      transition={{ type: 'spring', duration: 0.4 }}
    >
      <AnimatePresence initial={false} mode="sync" custom={direction}>
        {!isCompleted && (
          <SlideTransition key={currentStep} direction={direction} onHeightReady={(h) => setParentHeight(h)}>
            {children}
          </SlideTransition>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SlideTransition({ children, direction, onHeightReady }) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) onHeightReady(containerRef.current.offsetHeight);
  }, [children, onHeightReady]);

  return (
    <motion.div
      ref={containerRef}
      custom={direction}
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.4 }}
      className="stepper-slide"
    >
      {children}
    </motion.div>
  );
}

const stepVariants = {
  enter: (dir) => ({
    x: dir >= 0 ? '-100%' : '100%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir >= 0 ? '50%' : '-50%',
    opacity: 0,
  }),
};

export function Step({ children, ...rest }) {
  return (
    <div style={{ padding: '28px 32px' }} {...rest}>
      {children}
    </div>
  );
}

function StepIndicator({ step, currentStep, onClickStep, disableStepIndicators }) {
  const status = currentStep === step ? 'active' : currentStep < step ? 'inactive' : 'complete';

  const handleClick = () => {
    if (step !== currentStep && !disableStepIndicators) onClickStep(step);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="stepper-step-indicator"
      style={disableStepIndicators ? { pointerEvents: 'none', opacity: 0.5 } : {}}
      animate={status}
      initial={false}
    >
      <motion.div
        variants={{
          inactive: { scale: 1, backgroundColor: 'rgba(255,255,255,0.04)', color: '#5c6178', borderColor: 'rgba(255,255,255,0.08)' },
          active: { scale: 1.05, backgroundColor: '#6366f1', color: '#fff', borderColor: '#6366f1' },
          complete: { scale: 1, backgroundColor: '#6366f1', color: '#fff', borderColor: '#6366f1' },
        }}
        transition={{ duration: 0.3 }}
        className="stepper-step-inner"
      >
        {status === 'complete' ? (
          <Check size={14} className="stepper-check-icon" strokeWidth={3} />
        ) : status === 'active' ? (
          <div className="stepper-active-dot" />
        ) : (
          <span className="stepper-step-number">{step}</span>
        )}
      </motion.div>
    </motion.div>
  );
}

function StepConnector({ isComplete }) {
  return (
    <div className="stepper-connector">
      <motion.div
        className="stepper-connector-fill"
        initial={false}
        animate={{
          width: isComplete ? '100%' : '0%',
          backgroundColor: isComplete ? '#6366f1' : 'transparent',
        }}
        transition={{ duration: 0.4 }}
      />
    </div>
  );
}
