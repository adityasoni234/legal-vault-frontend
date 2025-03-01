import React from 'react';
import './Help.css';  // ✅ Ensure this matches the actual file name

const Help = () => {
  return (
    <div className="help-container">
      <h2>Help & Support</h2>
      <p>If you need assistance, check out our FAQs or contact our support team.</p>

      <div className="faq-section">
        <div className="faq-item">
          <h3>How do I upload documents?</h3>
          <p>You can upload documents by clicking on the "Secure Storage" section in the dashboard.</p>
        </div>
        <div className="faq-item">
          <h3>How do I verify a document on blockchain?</h3>
          <p>Use the "Blockchain Verification" option to authenticate your documents.</p>
        </div>
        <div className="faq-item">
          <h3>How can I contact support?</h3>
          <p>Reach us at support@legalvault.com for any assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
