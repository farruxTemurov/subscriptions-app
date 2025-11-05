import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubscriptionList from './components/SubscriptionsList';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div className="max-w-4xl mx-auto">
                                <h1 className="text-3xl font-bold text-center mb-8 text-gray-100 tracking-wide">
                                    My Subscriptions
                                </h1>
                                <SubscriptionList />
                            </div>
                        }
                    />

                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/notfound" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
