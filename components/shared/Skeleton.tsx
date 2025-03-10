import React from "react";

const Skeleton = ({
                      className = "",
                      ...props
                  }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`animate-pulse bg-gray-200 rounded-md ${className}`}
            {...props}
        />
    );
};

export { Skeleton };