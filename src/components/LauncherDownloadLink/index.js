import React, { useState, useEffect } from 'react';

export default function LauncherDownloadLink() {
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(false);
  const [apiError, setApiError] = useState(false);

  const [downloadUrl, setDownloadUrl] = useState("#");
  const [launcherVersion, setLauncherVersion] = useState("");

  useEffect(async () => {
    const response = await fetch(
      `https://api.github.com/DayZLegacyDev/DayZ-Resurrection/releases/latest`
    );
    if (response.status != 200) {
      setLoading(false);
      setApiError(false);
      setAvailable(true);
      return;
    }
    const data = await response.json();


      for (const asset of data.assets) {
        if (asset.name.match(/^.*\.exe$/)) {
          setAvailable(true);
          setDownloadUrl(asset.browser_download_url);
          setLauncherVersion(data.tag_name);
          setLoading(false);
          return;
        }
      }
  }, []);

  function DownloadContent() {
    if (loading) {
      return (
        <div className="text">
          <h3 className="title">Download</h3>
          <p className="description">Fetching latest release...</p>
        </div>
      );
    }
    if (apiError) {
      return (
        <div className="text">
          <h3 className="title">Download</h3>
          <p className="description">Can't fetch latest release, API error or you are rate-limited!</p>
        </div>
      );
    }
    if (!available) {
      return (
        <div className="text">
          <h3 className="title">Download</h3>
          <p className="description">Everything you need to start with DayZ Legacy. You must own a copy of the game on Steam to play.</p>
          <span className="more">Windows support only&nbsp;&nbsp;<svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.844 12.016c.199 0 .375-.07.527-.211l5.203-5.01a.728.728 0 00.246-.554.728.728 0 00-.246-.553L8.406.694a.84.84 0 00-.562-.21c-.211 0-.39.078-.536.237a.79.79 0 00-.22.553c0 .211.082.393.246.545l3.797 3.657H1.04a.765.765 0 00-.571.246.748.748 0 00-.22.58c.012.199.094.369.246.51.152.14.328.21.527.21h10.073L7.299 10.68a.776.776 0 00-.237.545.714.714 0 00.22.545c.152.164.34.246.562.246z" fill="#febb01" fillRule="nonzero"></path></svg></span>
        </div>
      );
    } else {
      return (
        <div className="text">
          <h3 className="title">Download</h3>
          <p className="description">Everything you need to start with DayZ Legacy. You must own a copy of the game on Steam to play.</p>
          <span className="more">Launcher 1.36 for Windows<svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.844 12.016c.199 0 .375-.07.527-.211l5.203-5.01a.728.728 0 00.246-.554.728.728 0 00-.246-.553L8.406.694a.84.84 0 00-.562-.21c-.211 0-.39.078-.536.237a.79.79 0 00-.22.553c0 .211.082.393.246.545l3.797 3.657H1.04a.765.765 0 00-.571.246.748.748 0 00-.22.58c.012.199.094.369.246.51.152.14.328.21.527.21h10.073L7.299 10.68a.776.776 0 00-.237.545.714.714 0 00.22.545c.152.164.34.246.562.246z" fill="#febb01" fillRule="nonzero"></path></svg></span>
        </div>
      );
    }
  }

  return (
    <div className={`box ${!available ? "disabled" : ""}`}>
      <span className="icon">
        <img src="/img/download.svg" />
      </span>
      <DownloadContent />
      <a href={downloadUrl} className="link">Download the DayZ Legacy launcher.</a>
    </div>
  );
}
