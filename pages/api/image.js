export default function handler(req, res) {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const path = `/images/${month}/${day}_${month}.svg`;
  res.status(200).json({ path });
}
