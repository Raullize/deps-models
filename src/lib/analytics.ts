export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventParams,
    });
  } else {
    // Apenas para log durante desenvolvimento
    console.log(`[Analytics Mock] Event: ${eventName}`, eventParams);
  }
};