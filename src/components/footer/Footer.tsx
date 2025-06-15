export const Footer = () => {
  return (
    <div>
      <p className="text-[20px] lg:text-[30px] text-white font-poppins text-center">
        With &lt;3 from the HexLabs team <br />
        <a
          className="underline"
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          target="_blank"
        >
          MLH Code of Conduct
        </a>
      </p>

      <img src="/footer.png" alt="footer graphic" className="w-full" />
    </div>
  );
};
