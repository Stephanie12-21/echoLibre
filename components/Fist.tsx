const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="w-64 h-64 relative">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="clip-path-1">
              <path d="M 266.5,-0.5 C 269.167,-0.5 271.833,-0.5 274.5,-0.5C 308.104,18.3057 341.771,37.139 375.5,56C 357.516,59.6083 339.516,63.1083 321.5,66.5C 320.808,67.0253 320.308,67.6919 320,68.5C 318.476,80.3149 316.309,91.9816 313.5,103.5C 290.414,92.4778 266.08,85.9778 240.5,84C 227.151,83.3087 213.817,83.4753 200.5,84.5C 202.167,73.1667 203.833,61.8333 205.5,50.5C 219.802,49.7172 234.135,49.2172 248.5,49C 233.583,46.9699 218.583,45.9699 203.5,46C 188.006,37.7537 172.672,29.2537 157.5,20.5C 193.918,13.3775 230.251,6.37749 266.5,-0.5 Z" />
            </clipPath>
            <clipPath id="clip-path-2">
              <path d="M 237.5,93.5 C 266.177,91.0816 286.677,102.748 299,128.5C 307.884,157.182 300.051,180.016 275.5,197C 249.521,209.802 226.021,206.302 205,186.5C 186.752,162.666 186.085,138.333 203,113.5C 212.291,102.779 223.791,96.1124 237.5,93.5 Z" />
            </clipPath>
            <clipPath id="clip-path-3">
              <path d="M 151.5,102.5 C 155.762,140.284 164.928,176.95 179,212.5C 189.387,237.371 204.887,258.371 225.5,275.5C 256.362,236.805 291.362,202.305 330.5,172C 352.684,155.577 377.351,144.577 404.5,139C 411.94,138.072 419.274,138.406 426.5,140C 390.748,157.084 362.581,182.584 342,216.5C 314.817,263.369 295.484,313.369 284,366.5C 275.057,407.1 268.724,448.1 265,489.5C 187.355,434.721 143.355,359.721 133,264.5C 127.901,209.153 134.067,155.153 151.5,102.5 Z" />
            </clipPath>
            <clipPath id="clip-path-4">
              <path d="M 436.5,149.5 C 410.329,178.808 390.495,212.141 377,249.5C 355.305,313.391 346.305,379.058 350,446.5C 350.352,460.416 351.519,474.249 353.5,488C 353.026,489.608 352.359,489.774 351.5,488.5C 336.23,457.188 326.73,424.188 323,389.5C 308.333,422.833 293.667,456.167 279,489.5C 283.123,413.677 300.456,341.01 331,271.5C 348.957,230.72 374.791,195.886 408.5,167C 417.204,160.124 426.537,154.291 436.5,149.5 Z" />
            </clipPath>
          </defs>
          <g>
            <path
              className="animate-draw"
              style={{ animationDelay: "0s" }}
              stroke="#1065a3"
              fill="none"
              strokeWidth="2"
              d="M 266.5,-0.5 C 269.167,-0.5 271.833,-0.5 274.5,-0.5C 308.104,18.3057 341.771,37.139 375.5,56C 357.516,59.6083 339.516,63.1083 321.5,66.5C 320.808,67.0253 320.308,67.6919 320,68.5C 318.476,80.3149 316.309,91.9816 313.5,103.5C 290.414,92.4778 266.08,85.9778 240.5,84C 227.151,83.3087 213.817,83.4753 200.5,84.5C 202.167,73.1667 203.833,61.8333 205.5,50.5C 219.802,49.7172 234.135,49.2172 248.5,49C 233.583,46.9699 218.583,45.9699 203.5,46C 188.006,37.7537 172.672,29.2537 157.5,20.5C 193.918,13.3775 230.251,6.37749 266.5,-0.5 Z"
            />
            <rect
              className="animate-fill"
              style={{ animationDelay: "2s" }}
              x="0"
              y="0"
              width="500"
              height="500"
              fill="#1065a3"
              clipPath="url(#clip-path-1)"
            />
          </g>
          <g>
            <path
              className="animate-draw"
              style={{ animationDelay: "0.5s" }}
              stroke="#0f65a4"
              fill="none"
              strokeWidth="2"
              d="M 237.5,93.5 C 266.177,91.0816 286.677,102.748 299,128.5C 307.884,157.182 300.051,180.016 275.5,197C 249.521,209.802 226.021,206.302 205,186.5C 186.752,162.666 186.085,138.333 203,113.5C 212.291,102.779 223.791,96.1124 237.5,93.5 Z"
            />
            <rect
              className="animate-fill"
              style={{ animationDelay: "2.5s" }}
              x="0"
              y="0"
              width="500"
              height="500"
              fill="#0f65a4"
              clipPath="url(#clip-path-2)"
            />
          </g>
          <g>
            <path
              className="animate-draw"
              style={{ animationDelay: "1s" }}
              stroke="#0f65a4"
              fill="none"
              strokeWidth="2"
              d="M 151.5,102.5 C 155.762,140.284 164.928,176.95 179,212.5C 189.387,237.371 204.887,258.371 225.5,275.5C 256.362,236.805 291.362,202.305 330.5,172C 352.684,155.577 377.351,144.577 404.5,139C 411.94,138.072 419.274,138.406 426.5,140C 390.748,157.084 362.581,182.584 342,216.5C 314.817,263.369 295.484,313.369 284,366.5C 275.057,407.1 268.724,448.1 265,489.5C 187.355,434.721 143.355,359.721 133,264.5C 127.901,209.153 134.067,155.153 151.5,102.5 Z"
            />
            <rect
              className="animate-fill"
              style={{ animationDelay: "3s" }}
              x="0"
              y="0"
              width="500"
              height="500"
              fill="#0f65a4"
              clipPath="url(#clip-path-3)"
            />
          </g>
          <g>
            <path
              className="animate-draw"
              style={{ animationDelay: "1.5s" }}
              stroke="#1165a3"
              fill="none"
              strokeWidth="2"
              d="M 436.5,149.5 C 410.329,178.808 390.495,212.141 377,249.5C 355.305,313.391 346.305,379.058 350,446.5C 350.352,460.416 351.519,474.249 353.5,488C 353.026,489.608 352.359,489.774 351.5,488.5C 336.23,457.188 326.73,424.188 323,389.5C 308.333,422.833 293.667,456.167 279,489.5C 283.123,413.677 300.456,341.01 331,271.5C 348.957,230.72 374.791,195.886 408.5,167C 417.204,160.124 426.537,154.291 436.5,149.5 Z"
            />
            <rect
              className="animate-fill"
              style={{ animationDelay: "3.5s" }}
              x="0"
              y="0"
              width="500"
              height="500"
              fill="#1165a3"
              clipPath="url(#clip-path-4)"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
