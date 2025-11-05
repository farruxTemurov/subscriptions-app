import tw from 'tailwind-styled-components';
import type { Subscription } from '../types/subscription';

interface SubscriptionCardProps {
  subscription: Subscription;
  onCancel: (id: string) => void;
}

// Card container
const Card = tw.div<{ $status: string }>`
  p-5 rounded-2xl shadow-lg transition-transform duration-200 bg-gray-800
  ${(p) => (p.$status === 'cancelled'
    ? 'border-l-4 border-gray-600 opacity-60'
    : 'border-l-4 border-green-500')}
  hover:scale-[1.02]
`;

const Title = tw.h3`
  text-lg font-semibold mb-2 text-gray-100
`;

const Status = tw.p<{ $status: string }>`
  mb-2 capitalize font-medium
  ${(p) => (p.$status === 'cancelled'
    ? 'text-red-400'
    : 'text-green-400')}
`;

const InfoText = tw.p`
  text-gray-300 mb-1
`;

const Button = tw.button<{ $disabled?: boolean }>`
  mt-4 px-4 py-2 rounded-lg text-white font-medium transition-all duration-200
  ${(p) =>
    p.$disabled
      ? 'bg-gray-600 cursor-not-allowed text-gray-300'
      : 'bg-red-600 hover:bg-red-500 shadow-md hover:shadow-red-400/30'}
`;

function SubscriptionCard({ subscription, onCancel }: SubscriptionCardProps) {
  const { id, offerTitle, status, price, currency, nextPaymentDate } = subscription;

  const formattedDate = new Date(nextPaymentDate).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedPrice = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
  }).format(price);

  return (
    <Card $status={status}>
      <Title>{offerTitle}</Title>
      <Status $status={status}>Status: {status}</Status>
      <InfoText>Next Payment: {formattedDate}</InfoText>
      <InfoText>Price: {formattedPrice}</InfoText>
      <Button onClick={() => onCancel(id)} $disabled={status === 'cancelled'}>
        {status === 'cancelled' ? 'Cancelled' : 'Cancel'}
      </Button>
    </Card>
  );
}

export default SubscriptionCard;
