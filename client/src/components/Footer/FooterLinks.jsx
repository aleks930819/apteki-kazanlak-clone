const FooterLinks = ({ title, links }) => {
  return (
    <div >
      <h2 className="border-b-[1px] border-white  pb-2 text-2xl text-start">{title}</h2>
      <ul className="pt-4 flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.title} className="text-sm">
            <a to="/">{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
