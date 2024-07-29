import Link from "next/link";

// interface BreadcrumbProps {
//   names: [{ name: string }];
//   urls: string[];
// }

type BreadcrumbProps = {
  titleNames: string[];
  titleUrls: string[];
};

const Breadcrumb = ({ titleNames, titleUrls }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      {/* <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageData}
      </h2> */}

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" href="/dashboard">
              ראשי /
            </Link>
          </li>
          {titleNames.map((name, index) => {
            return (
              index < titleNames.length - 1 && (
                <li key={index}>
                  <Link className="font-medium" href={`/${titleUrls[index]}`}>
                    {`${name} /`}
                  </Link>
                </li>
              )
            );
          })}

          <li className="font-medium text-gold">
            {titleNames[titleNames.length - 1]}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
