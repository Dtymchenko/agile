import React from "react";

const Carousel = ({ delay, children }) => {
  const onClickPrev = () => {
    if (renderedItem === 0) return;
    else {
      setRenderedItem((prev) => prev - 1);
    }
  };

  const onClickNext = () => {
    if (renderedItem === children.length - 1) {
      return;
    } else {
      setRenderedItem((prev) => prev + 1);
    }
  };

  const [renderedItem, setRenderedItem] = React.useState(0);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    if (children) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (renderedItem === children.length - 1) {
          setRenderedItem((prev) => prev * 0);
        } else {
          setRenderedItem((prev) => prev + 1);
        }
      }, delay);
    }
  }, [renderedItem]);

  const renderChildren = () => {
    if (React.isValidElement(children)) {
      return children;
    }

    if (Array.isArray(children)) {
      return children.map((child, index) => <div key={index}>{child}</div>);
    }

    return null;
  };

  return (
    <div>
      {children ? (
        children.length > 0 ? (
          <div>
            <div>{renderChildren()[renderedItem]}</div>
            {children.length > 1 && (
              <div>
                <button onClick={onClickPrev}>Previous</button>
                <button onClick={onClickNext}>Next</button>
              </div>
            )}
          </div>
        ) : (
          "Empty"
        )
      ) : (
        "Empty"
      )}
    </div>
  );
};

export default Carousel;
