interface SatisfactionRatingProps {
  value: number | null;
  onChange: (value: number) => void;
}

const SatisfactionRating = ({ value, onChange }: SatisfactionRatingProps) => {
  const emojis = [
    { value: 1, label: '😞' },
    { value: 2, label: '😕' },
    { value: 3, label: '😐' },
    { value: 4, label: '🙂' },
    { value: 5, label: '😄' }
  ];

  return (
    <div className="flex justify-between gap-4">
      {emojis.map((emoji) => (
        <button
          key={emoji.value}
          onClick={() => onChange(emoji.value)}
          className={`flex-1 aspect-square flex items-center justify-center text-4xl rounded-full border-2 transition-all ${
            value === emoji.value
              ? 'border-[#1e81b0] bg-[#1e81b0]/10'
              : 'border-gray-200 hover:border-[#1e81b0]/50'
          }`}
        >
          {emoji.label}
        </button>
      ))}
    </div>
  );
};

export default SatisfactionRating;