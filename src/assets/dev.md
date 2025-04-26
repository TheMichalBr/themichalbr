# Thanks to Pedro Tech for amazing tutorial.

# DEV

- zmenit spodni text
- upravit mobile menu
- obcasne mizeni elementu pri resiznuti
- loading dat do midu
- upravit texty
- vyresit jak to udelat mensi(min na gridu?) GAMES
- reviews asi dat pod sebe
- games predelat
- vypada v pohode 
- pro celou stranku plati aby jsme ji vic ujednotili designem animacema stylem a barvou pouzitou





















Crosshair CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D
Viewmodel viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2; cl_righthand 1;
viewmodel_presetpos 0;
Mouse sens. 1.82

https://csstats.gg/player/76561198115132041

https://faceit.com/en/players/michalbr-

------------------------------------------------------ CS2 Config (autoexec.cfg)
------------------------------------------------------

// CROSSHAIR
CSGO-bimys-eFkyb-icw9q-Sfrmo-XKH8D

// VIEWMODEL AND BOB
viewmodel_fov 68; viewmodel_offset_x 2; viewmodel_offset_y 2; viewmodel_offset_z -2;
cl_righthand 1; viewmodel_presetpos 0; cl_viewmodel_shift_left_amt 0.5;
cl_viewmodel_shift_right_amt 0.25; viewmodel_recoil 0;
cl_bob_lower_amt 5; cl_bobamt_lat 0.1; cl_bobamt_vert 0.1;

// RADAR
cl_hud_radar_scale 1.15; cl_radar_scale 0.4; cl_radar_always_centered 1; cl_radar_rotate 1;
cl_radar_icon_scale_min 0.4; cl_radar_square_with_scoreboard 1; cl_radar_icon_scale_min 0.25;

// BINDS (Using - MOUSE4 for pings, MOUSE5 for microphone)
bind "alt" "toggle cl_righthand 0 1"; bind = "holdpos"; bind v "use weapon_smokegrenade";
bind "c" "sv_rethrow_last_grenade"; bind "x" "noclip";

// HUD
hud_scaling 0.896259; cl_hud_color 12; cl_hud_playercount_showcount 0;
cl_hud_playercount_pos 0; cl_showloadout 0; cl_hud_healthammo_style 0;
cl_hud_background_alpha 0.5; cl_hud_bomb_under_radar 1;
safezonex 0.993978; safezoney 0.993978;

// SETTINGS
fps_max 400; fps_max_ui 70; fps_max_tools 60; cl_showfps 0; cq_netgraph 1; cl_cmdrate 128; rate 786432;

// (SLO = -high -threads 8 -refresh 270 -console +exec autoexec.cfg /-language bananagaming // 2560:1440 270Hz High
125%, 45%/35%, 400DPI 1000Hz 6/11 2.4/1)

// PRACTICE COMMANDS AND BINDS (Exec in offline game to load practice)
sv_cheats 1; mp_warmup_end 1; mp_startmoney 16000; mp_freezetime 0; mp_limitteams 0;
mp_autoteambalance 0; mp_roundtime_defuse 60; mp_roundtime_hostage 60; mp_limitteams 0;
mp_autoteambalance 0; bot_stop 1; mp_solid_teammates 1; mp_maxmoney 99999; god;
mp_startmoney 99999; ammo_grenade_limit_total 6; sv_grenade_trajectory_thickness 1;
sv_showimpacts 1; mp_buy_anywhere 1; mp_roundtime 60; sv_grenade_trajectory_time 10;
sv_showbullethits 1; sv_infinite_ammo 1; mp_restartgame 1; mp_humanteam any;
bot_kick; sv_grenade_trajectory 1; sv_showimpacts_time 10;
bot_mimic_yaw_offset 0; mp_buytime 1337;

clear;

echo #### MichalBr's CS2 config loaded! ####;

























ale to logo v pozadí zmenšený, daný na pravo, black fade zleva a lehkej blur

{games.map((game) => (
  <div
    key={game.id}
    className="p-4 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
    style={{
      backgroundImage: `url(${game.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Překryv pro ztmavení */}
    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

    {/* Logo na pozadí */}
    <div
      className="absolute right-4 top-4 w-32 h-32 opacity-20"
      style={{
        backgroundImage: `url(${game.rankIcon})`, // Používá rankIcon jako logo
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "blur(5px)", // Lehké rozostření
      }}
    ></div>

    {/* Fade efekt zleva */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-lg"></div>

    {/* Obsah karty */}
    <div className="relative z-10">
      <div className="flex items-center gap-4">
        <img
          src={game.image}
          alt={game.name}
          className="w-14 h-14 rounded-lg"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{game.name}</h3>
          <p className="text-sm text-gray-300">Platform: {game.platform}</p>
          <div className="flex items-center gap-2">
            <img
              src={game.rankIcon}
              alt={`${game.rank} Icon`}
              className="w-6 h-6"
            />
            <p className="text-sm text-yellow-400">{game.rank}</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => toggleSettings(game.id)}
        className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110"
      >
        <img src={S} alt="Settings" className="w-5 h-5" />
      </button>
    </div>
  </div>
))}






{games.map((game) => (
  <div
    key={game.id}
    className="p-4 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
    style={{
      backgroundImage: `url(${game.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Překryv pro ztmavení */}
    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

    {/* Zmenšené logo ranku na pravé straně */}
    <div
      className="absolute right-4 top-4 w-20 h-20 opacity-30"
      style={{
        backgroundImage: `url(${game.rankIcon})`, // Používá rankIcon jako logo
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "blur(3px)", // Lehké rozostření
      }}
    ></div>

    {/* Fade efekt zleva */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-lg"></div>

    {/* Obsah karty */}
    <div className="relative z-10">
      <div className="flex items-center gap-4">
        <img
          src={game.image}
          alt={game.name}
          className="w-14 h-14 rounded-lg"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{game.name}</h3>
          <p className="text-sm text-gray-300">Platform: {game.platform}</p>
          <div className="flex items-center gap-2">
            <img
              src={game.rankIcon}
              alt={`${game.rank} Icon`}
              className="w-6 h-6"
            />
            <p className="text-sm text-yellow-400">{game.rank}</p>
          </div>
        </div>
      </div>
      {/* Tlačítko Settings */}
      <button
        onClick={() => toggleSettings(game.id)}
        className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110"
      >
        <img src={S} alt="Settings" className="w-5 h-5" />
      </button>
    </div>
  </div>
))}





{games.map((game) => (
  <div
    key={game.id}
    className="p-4 bg-gray-800/70 backdrop-blur-md rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
    style={{
      backgroundImage: `url(${game.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Překryv pro ztmavení */}
    <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

    {/* Obsah karty */}
    <div className="relative z-10">
      <div className="flex items-center gap-4">
        <img
          src={game.image}
          alt={game.name}
          className="w-14 h-14 rounded-lg"
        />
        <div>
          <h3 className="text-lg font-bold text-white">{game.name}</h3>
          <p className="text-sm text-gray-300">Platform: {game.platform}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-yellow-400">{game.rank}</p>
          </div>
        </div>
      </div>
      {/* Tlačítko Settings */}
      <button
        onClick={() => toggleSettings(game.id)}
        className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-400 transition-transform duration-300 transform hover:scale-110"
      >
        <img src={S} alt="Settings" className="w-5 h-5" />
      </button>
    </div>

    {/* Nastavení (Settings) */}
    <div
      className={`mt-4 bg-gray-700/80 p-4 rounded-lg transition-all duration-500 transform ${
        showSettings === game.id
          ? "max-h-screen opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
      }`}
    >
      {Object.entries(game.settings).map(([key, value]) => (
        <p key={key} className="text-sm text-gray-300">
          {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
        </p>
      ))}
    </div>
  </div>
))}