# Projects

<div class="grid">
  <div class="grid-item">
    <h2>This website</h2>
    <p>
      I created this website using the Flask framework for Python. I host it on my
      virtual private server that I rent from Hetzner.
    </p>
    <p>
      I serve this website with nginx, to create the content I serve I use
      <a href="https://github.com/Frozen-Flask/Frozen-Flask/">Frozen-Flask</a>
      that creates static files for all routes in Flask.
    </p>
    <b>Github</b>: <a href="https://github.com/Quaqqer/site/">github.com/Quaqqer/site</a>
  </div>
  <div class="grid-item">
    <h2>Advent of Code</h2>
    <p>
      For the past three years I have participated in Advent of Code, since a
      student association in my university hosts a competition every year. The
      first year I did not quite complete the entire year but the last two years
      (2020 and 2021) I have come second place in the student associations
      leader board out of roughly 50 respectively 80 participants.
    </p>
    <b>Github</b>: <a href="https://github.com/Quaqqer/aoc/">github.com/Quaqqer/aoc</a>
  </div>
  <div class="grid-item">
    <h2>Servers</h2>
    <p>
      I currently have 2 servers, one at home and one VPS at Hetzner. Both are
      running the distro <a href="https://nixos.org/">NixOS</a>, which is an
      operating system that is using the Nix package manager.
    </p>
    <p>
      The reason why I use NixOS is that I can configure my OS in the Nix
      language (Nix is a language as well as package manager). This means that I
      can configure my server once and even reuse that configuration in multiple
      machines, as opposed to Debian for instance where you need to configure
      every server manually every time, except if you set up scripts (those can
      break!).
    </p>
    <p>
      On my home server I run various services in Docker, Home Assistant being
      one of them. I also run a Minecraft server, but not in Docker. On my VPS I
      run lighter services such as this website.
    </p>
    <p>
      Unfortunately I don't share my server configurations publicly because they
      contain private information, such as ssh public keys.
    </p>
  </div>
  <div class="grid-item">
    <h2>Snake written in Rust</h2>
    <p>
      This was just a simple project I did because I wanted to do something fun.
      The game is of course very simple but I had fun both applying my knowledge
      of rust as well as learning the terminal interface library ncurses.
    </p>
    <img src="https://raw.githubusercontent.com/Quaqqer/rust-snake/master/screenshot.png" style="width: 350px; display: block; margin: auto;">
    <p>
      <b>Github</b>: <a href="https://github.com/Quaqqer/rust-snake/">github.com/Quaqqer/rust-snake</a>
    </p>
  </div>
</div>
