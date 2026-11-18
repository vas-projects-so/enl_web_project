import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, Container, CssBaseline } from '@mui/material';

function App() {
  const [severity, setSeverity] = useState('info');

  useEffect(() => {
    async function checkHealth() {
      try {
        const response = await fetch('/health');
        const result = response.ok && await response.json();
        setSeverity(result?.status === 'ok' ? 'success' : 'error');
      } catch {
        setSeverity('error');
      }
    }

    checkHealth();
  }, []);

  const messages = {
    info: 'Проверка API…',
    success: 'API доступен',
    error: 'API недоступен',
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
      <CssBaseline />
      <Alert severity={severity}>{messages[severity]}</Alert>
    </Container>
  );
}

createRoot(document.getElementById('root')).render(<App />);
