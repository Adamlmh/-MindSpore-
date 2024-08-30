export default function globalErrorHandling() {
  // 捕获未捕获的同步错误
  window.onerror = function (
    errorMessage,
    fileName,
    lineNumber,
    columnNumber,
    error
  ) {
    console.error("Global error handler (synchronous):", errorMessage, error);
    // 返回 true 表示错误已经被处理，不会显示红色屏幕
    return true;
  };

  // 捕获未处理的 Promise 拒绝
  window.addEventListener("unhandledrejection", (event) => {
    console.error("未处理的Promise拒绝:", event.promise, event.reason);
    // 阻止默认行为，防止控制台出现警告
    event.preventDefault();
  });
}
