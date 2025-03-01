import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>Welcome to Legal Vault. By using our platform, you agree to the following terms and conditions.</p>

      <h2>1. Account Registration</h2>
      <p>You must register an account to use Legal Vault services. Ensure your account information is accurate.</p>

      <h2>2. Data Security</h2>
      <p>We prioritize the security of your documents. Our encryption ensures your files remain private.</p>

      <h2>3. Prohibited Use</h2>
      <p>Users must not upload illegal content or use the platform for fraudulent purposes.</p>

      <h2>4. Liability</h2>
      <p>Legal Vault is not responsible for any legal disputes arising from document usage.</p>

      <h2>5. Changes to Terms</h2>
      <p>We reserve the right to update our Terms & Conditions at any time.</p>
    </div>
  );
};

export default Terms;
