import React from "react";
import { AlertTriangle } from "lucide-react";

const ErrorMessage = ({
                          message,
                          className = "",
                      }: {
    message: string;
    className?: string;
}) => {
    return (
        <div
            className={`flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-md ${className}`} // Base styles + custom classes
        >
            <AlertTriangle className="w-5 h-5" />
            <p>{message}</p>
        </div>
    );
};

export { ErrorMessage };