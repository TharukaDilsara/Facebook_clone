import React from 'react'
import './feedbackModal.css'
import CloseIcon from '@mui/icons-material/Close';

export default function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDontInclude = () => {
    // Handle don't include action
    onClose();
  };

  const handleInclude = () => {
    // Handle include action
    onClose();
  };

  return (
    <div className="feedbackModalOverlay" onClick={onClose}>
      <div className="feedbackModalContainer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="feedbackModalHeader">
          <h2 className="feedbackModalTitle">Give feedback to Facebook</h2>
          <button className="feedbackCloseButton" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="feedbackModalContent">
          <h3 className="feedbackQuestion">
            Include complete logs and diagnostics in your report?
          </h3>
          
          <p className="feedbackDescription">
            Information about your device, account and this app related to the issue that you are reporting will be automatically included in this report in order to help us understand and resolve the issue.
          </p>

          <p className="feedbackDescription">
            You can further help us fix this problem by sending complete logs and diagnostics. This may include information such as user activity logs, network logs, crash logs and memory dumps associated with this session. We will not use the information contained in this report for other purposes.{' '}
            <span className="feedbackLink" role="button" tabIndex={0}>Learn more</span>
          </p>

          <p className="feedbackNote">
            On the next screen, you will be prompted to attach screenshots or screen recordings. These will be included in the report.
          </p>
        </div>

        {/* Footer Buttons */}
        <div className="feedbackModalFooter">
          <button className="feedbackButton feedbackButtonSecondary" onClick={handleDontInclude}>
            Don't include
          </button>
          <button className="feedbackButton feedbackButtonPrimary" onClick={handleInclude}>
            Include
          </button>
        </div>
      </div>
    </div>
  )
}