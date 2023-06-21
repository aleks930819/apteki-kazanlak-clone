const FooterCopyRight = () => {
  return (
    <div className="flex h-[7vh] w-full bg-grey-dark text-white">
      <span
        className="ml-auto
    flex
    items-center
    justify-center
    gap-2
    pr-[160px]
    text-sm
    text-white
  "
      >
        Developed by{' '}
        <a
          href="https://elevatecompany.eu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline "
        >
          Elevate Company Ltd.
        </a>
      </span>
    </div>
  );
};

export default FooterCopyRight;
