import Link from "next/link";

interface BreadcrumbProps {
  names: [{ name: string }];
  urls: string[];
}

const Breadcrumb = ({ pageData }: { pageData: BreadcrumbProps }) => {
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
          {pageData.names.map((name, index) => {
            return (
              index < pageData.names.length - 1 && (
                <li key={index}>
                  <Link className="font-medium" href={pageData.urls[index]}>
                    {`${name.name} /`}
                  </Link>
                </li>
              )
            );
          })}

          <li className="font-medium text-primary">
            {pageData.names[pageData.names.length - 1] &&
              pageData.names[pageData.names.length - 1].name}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
