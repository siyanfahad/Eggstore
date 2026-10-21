import EggMotif from './EggMotif';

const TONES = ['bg-forest/10', 'bg-gold/15', 'bg-charcoal/5'];

export default function ProductImage({ seed = 0, className = '' }) {
  const tone = TONES[seed % TONES.length];
  return (
    <div className={`${tone} flex items-center justify-center ${className}`}>
      <EggMotif className="w-1/3 h-1/3 text-charcoal/25" />
    </div>
  );
}
