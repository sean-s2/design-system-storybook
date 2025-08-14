import React, { useState } from 'react';
import { Button } from './Button';

export const LoadingDemo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('Submitting...');

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const handleSimulateAsync = async () => {
    setIsLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsLoading(false);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>Button Loading State Demo</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Controls</h3>
        <Button 
          label="Toggle Loading State" 
          variant="secondary" 
          onClick={handleToggleLoading}
          style={{ marginRight: '10px' }}
        />
        <Button 
          label="Simulate Async (3s)" 
          variant="tertiary" 
          onClick={handleSimulateAsync}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>
          Loading Text: 
          <input
            type="text"
            value={loadingText}
            onChange={(e) => setLoadingText(e.target.value)}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Primary Button</h3>
        <Button 
          label="Submit Form" 
          variant="primary" 
          loading={isLoading}
          loadingText={loadingText}
          onClick={() => console.log('Primary button clicked')}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Secondary Button</h3>
        <Button 
          label="Save Changes" 
          variant="secondary" 
          loading={isLoading}
          loadingText="Saving..."
          onClick={() => console.log('Secondary button clicked')}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Different Sizes</h3>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <Button 
            label="Small" 
            size="sm" 
            loading={isLoading}
            loadingText="Loading..."
          />
          <Button 
            label="Medium" 
            size="md" 
            loading={isLoading}
            loadingText="Loading..."
          />
          <Button 
            label="Large" 
            size="lg" 
            loading={isLoading}
            loadingText="Loading..."
          />
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>All Variants</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Button 
            label="Primary Action" 
            variant="primary" 
            loading={isLoading}
            loadingText="Processing..."
          />
          <Button 
            label="Secondary Action" 
            variant="secondary" 
            loading={isLoading}
            loadingText="Processing..."
          />
          <Button 
            label="Tertiary Action" 
            variant="tertiary" 
            loading={isLoading}
            loadingText="Processing..."
          />
          <Button 
            label="Ghost Action" 
            variant="ghost" 
            loading={isLoading}
            loadingText="Processing..."
          />
          <Button 
            label="Link Action" 
            variant="link" 
            loading={isLoading}
            loadingText="Processing..."
          />
        </div>
      </div>
    </div>
  );
};
