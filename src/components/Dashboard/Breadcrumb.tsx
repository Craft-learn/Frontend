import React from "react";
import type { JSX } from "react";

const styles: Record<string, React.CSSProperties> = {
  item: { alignItems: "center", display: "inline-flex", gap: "inherit" },
  list: {
    alignItems: "center",
    display: "flex",
    gap: "inherit",
    listStyle: "none",
    wordWrap: "break-word",
  },
  separator: { alignItems: "center", display: "inline-flex" },
};

// Breadcrumb Context
const BreadcrumbContext = React.createContext<{
  separator: React.ReactNode | null;
}>({
  separator: null,
});

const useBreadcrumbContext = () => {
  return React.useContext(BreadcrumbContext);
};

// Breadcrumb Item Context
const BreadcrumbItemContext = React.createContext<{
  isCurrent: boolean;
  isLast: boolean;
}>({
  isCurrent: false,
  isLast: false,
});

const useBreadcrumbItemContext = () => {
  return React.useContext(BreadcrumbItemContext);
};

type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"span">;
function BreadcrumbSeparator(
  props: BreadcrumbSeparatorProps
): JSX.Element | null {
  const { children, style, role = "presentation", ...restProps } = props;
  const { separator } = useBreadcrumbContext();
  const { isLast } = useBreadcrumbItemContext();

  if (!separator || isLast) return null;

  return (
    <span role={role} style={{ ...styles.separator, ...style }} {...restProps}>
      {children ?? separator}
    </span>
  );
}

type BreadcrumbLinkProps<T extends React.ElementType = "a"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    href?: string;
  };

function BreadcrumbLink<T extends React.ElementType = "a">(
  props: BreadcrumbLinkProps<T>
): JSX.Element {
  const { as = "a", ...restProps } = props;
  const { isCurrent } = useBreadcrumbItemContext();

  const Component = isCurrent ? "span" : as;
  if (isCurrent) delete restProps.href;

  return (
    <Component {...restProps} aria-current={isCurrent ? "page" : undefined} />
  );
}

type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li"> & {
  isCurrentPage?: boolean;
};

function BreadcrumbItem(props: BreadcrumbItemProps): JSX.Element {
  const { isCurrentPage = false, style, children, ...restProps } = props;

  return (
    <BreadcrumbItemContext.Provider
      value={{ isCurrent: isCurrentPage, isLast: false }}
    >
      <li style={{ ...styles.item, ...style }} {...restProps}>
        {children}
        <BreadcrumbSeparator />
      </li>
    </BreadcrumbItemContext.Provider>
  );
}

type BreadcrumbProps = React.ComponentPropsWithoutRef<"ol"> & {
  separator?: React.ReactNode;
};

function Breadcrumb(props: BreadcrumbProps): JSX.Element {
  const { separator, children, ...restProps } = props;
  const count = React.Children.count(children);

  return (
    <BreadcrumbContext.Provider value={{ separator }}>
      <nav aria-label="Breadcrumb" {...restProps}>
        <ol style={styles.list}>
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement<BreadcrumbItemProps>(child)) return child;
            const isCurrent = child.props.isCurrentPage ?? false;
            const isLast = index + 1 === count;

            return (
              <BreadcrumbItemContext.Provider
                value={{ isCurrent, isLast }}
                key={index}
              >
                {child}
              </BreadcrumbItemContext.Provider>
            );
          })}
        </ol>
      </nav>
    </BreadcrumbContext.Provider>
  );
}

export type {
  BreadcrumbProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbSeparatorProps,
};
export { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator };
