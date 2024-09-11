import React, { useEffect } from 'react';

const ContactMap = () => {
  useEffect(() => {
    // Function to load the external script
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.src = 'https://1map.com/js/script-for-user.js?embed_id=215844';
      script.async = true;
      script.onload = () => {
        // Initialize the map once the script is loaded
        const setting = {
          height: 510,
          width: 803,
          zoom: 15,
          queryString: "Norwich, UK",
          place_id: "",
          satellite: false,
          centerCoord: [52.625201, 1.291852],
          cid: "0x3315127340d45067",
          lang: "en",
          cityUrl: "/united-kingdom/norwich",
          cityAnchorText: "Map of Norwich, United Kingdom",
          id: "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
          embed_id: "215844"
        };
        window.OneMap.initMap(setting);
      };
      document.body.appendChild(script);
    };

    loadMapScript(); // Load the map script

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const script = document.querySelector(`script[src='https://1map.com/js/script-for-user.js?embed_id=215844']`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="col-lg-6 col-md-6 p-0">
      <div className="card rounded-0 h-100">
        <div className="card-body p-0">
          <div className="map overflow-hidden" id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
            <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3" style={{ height: '510px', width: '803px' }}></div>
            <a href="https://1map.com/map-embed">1 Map</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
