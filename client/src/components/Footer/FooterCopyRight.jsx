const FooterCopyRight = () => {
  return (
    <div className="flex h-[60px] w-full items-center bg-grey-dark text-white pr-2 sm:pr-0">
      <div className="mx-auto flex w-full max-w-lg items-end justify-end">
        <span className="flex items-end justify-end gap-2  text-xs sm:text-sm text-white">
          Developed by{' '}
          <a
            href="https://elevatecompany.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Elevate Company Ltd.
          </a>
        </span>
      </div>
    </div>
  );
};

export default FooterCopyRight;
