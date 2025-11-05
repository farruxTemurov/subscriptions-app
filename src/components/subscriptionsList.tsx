import React, { useEffect, useState } from 'react';
import { fetchSubscriptions } from '../api/fetchSubscriptions';
import type { Subscription } from '../types/subscription';
import SubscriptionCard from './SubscriptionCard';

const SubscriptionsList: React.FC = () => {
    const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Fetch subscriptions when the component mounts
    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchSubscriptions();
                setSubscriptions(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Something went wrong');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // Handler for the "Cancel" button
    const handleCancel = (id: string) => {
        setSubscriptions((prev) =>
            prev.map((sub) =>
                sub.id === id ? { ...sub, status: 'cancelled' } : sub
            )
        );
    };

    // Render logic
    if (loading) {
        return <p className="text-center mt-10 text-gray-500">Loading...</p>;
    }

    if (error) {
        return (
            <p className=" text-lg text-center mt-10 text-red-600">
                Error: {error}
            </p>
        );
    }

    if (subscriptions.length === 0) {
        return (
            <p className="text-center mt-10 text-gray-600">
                No active subscriptions found.
            </p>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 grid gap-4 md:grid-cols-2">
            {subscriptions.map((sub) => (
                <SubscriptionCard
                    key={sub.id}
                    subscription={sub}
                    onCancel={handleCancel}
                />
            ))}
        </div>
    );
};

export default SubscriptionsList;
