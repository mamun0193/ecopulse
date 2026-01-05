const Row = ({ label, value }: { label: string; value: string | number }) => (
  <div className="flex items-center justify-between py-3 px-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 group">
    <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{label}</span>
    <span className="font-semibold text-green-400">{value}</span>
  </div>
);

export default Row;