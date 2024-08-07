export default () => {
  function allConsentGranted() {
    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  }

  return <div className={className}>{children}</div>;
};
