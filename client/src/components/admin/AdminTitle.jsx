const AdminTitle = ({ title1, title2 }) => {
  return (
    <h1 className="font-medium text-2xl">
      {title1} <span className="underline text-primary">{title2}</span>
    </h1>
  );
};

export default AdminTitle;
