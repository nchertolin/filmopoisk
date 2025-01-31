import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { ScrollProvider } from '@/app/providers/ScrollProvider';
import ThemeProvider from '@/app/providers/ThemeProvider';
import { StoreProvider } from '@/app/providers/StoreProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundary>
                    <ScrollProvider>
                        <StoreProvider>
                            <App />
                        </StoreProvider>
                    </ScrollProvider>
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
