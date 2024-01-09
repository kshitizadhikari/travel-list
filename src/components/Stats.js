export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>🤠 Start adding items to your packing list 📌</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPackedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You have packed everything!! Ready to go 🧳"
          : `✨ You have ${numItems} items on your list, and you have already packed ${numPackedItems}( ${packedPercentage}%) items. ✨`}
      </em>
    </footer>
  );
}
