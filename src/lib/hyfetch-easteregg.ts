export function defineHyfetch() {
    // Original ASCII art
    let asciiArt = `
%c                     =*********+                  %cleah%c@%cleahdevs.xyz
%c                 .*****************:              -----------------
%c              .**********************=            
%c            ***********.      -********           
%c         ***********             +******.         
%c      ***********.                 ******         
%c    **********.          .**.      .******        
%c  .********.          .*******      ******        
%c  *******           ***********+    ******        
%c ******          ******************:******        
%c *****+      .***************************         
%c.*****:      ********          =********.         
%c *****+      *****.              =******          
%c ******                           .******         
%c  ******:              .****+      +*****         
%c :********-          ********      -*****         
%c ***************************       +*****         
%c******.******************.        .******         
%c******    ************           *******          
%c******      *******.          .********.          
%c******       :**           .**********            
%c ******                 .***********              
%c .******+             ***********                 
%c   ********:      .***********                    
%c    +**********************.                      
%c      :*****************.                         
%c         .+*********=                             `;

    const flagColors = ['#5BCEFA', '#F5A9B8', '#FFFFFF', '#F5A9B8', '#5BCEFA']

    //@ts-ignore
    window.hyfetch = () => {
        const systemInfo = {
            os: `${navigator.platform}`, //${navigator.userAgent}`, // Platform & browser info
            kernel: "WebKernel 5.13", // Simulated kernel version
            uptime: `${Math.floor(Math.random() * 1000)} hours`, // Simulated uptime (random value)
            packages: "42 (npm)", // Simulated package count
            shell: "JavaScript Console", // Simulated shell (browser-based)
            resolution: `${window.screen.width}x${window.screen.height}`, // Real screen resolution
            terminal: "DevTools", // Simulated terminal (browser dev tools)
            cursor: "Custom",
            'terminal font': 'Chango'
        };

        let styles = [`color: ${flagColors[0]};`, 'color: #8be9fd; font-weight: bold;', '', 'color: #8be9fd; font-weight: bold;']
        console.clear();

        // Split ASCII art into lines
        const lines = asciiArt.split("\n");

        // Find the index of the "-----------------" line
        const markerIndex = lines.findIndex(line => line.includes("-----------------"));

        // Add system info to lines below the marker
        let infoIndex = 0;
        const systemInfoEntries = Object.entries(systemInfo);

        for (let i = 2; i < lines.length; i++) {
            styles.push(`color: ${flagColors[Math.floor(flagColors.length / lines.length * i)]};`)
            if (i <= markerIndex || infoIndex >= systemInfoEntries.length) {
                continue;
            }
            // Pad the current line with system info
            const [key, value] = systemInfoEntries[infoIndex];
            styles.push('color: #8be9fd; font-weight: bold;')
            styles.push(' ')


            lines[i] = lines[i].padEnd(40) + `%c ${key.padEnd(12)}%c: ${value}`;
            infoIndex++;
        }

        // Display updated ASCII art (gotta repeat the styles in order of use the amount of times used)
        console.log(lines.join("\n"), ...styles);
    };
}
