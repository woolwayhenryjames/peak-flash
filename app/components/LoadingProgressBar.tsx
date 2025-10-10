import { useEffect, useState } from "react";
import { useNavigation } from "react-router";

export default function LoadingProgressBar() {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const isLoading = navigation.state === "loading";

  useEffect(() => {
    if (isLoading) {
      setIsVisible(true);
      setProgress(0);

      // Simulate progress
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            return prev;
          }
          return prev + Math.random() * 30;
        });
      }, 200);

      return () => clearInterval(timer);
    }
    // Complete the progress bar quickly when navigation finishes
    setProgress(100);
    setTimeout(() => {
      setIsVisible(false);
      setProgress(0);
    }, 200);
  }, [isLoading]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 right-0 left-0 z-5000 h-1 bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-[#e26ea1] to-[#88cfd2] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(174, 117, 251, 0.5)",
        }}
      />
    </div>
  );
}
