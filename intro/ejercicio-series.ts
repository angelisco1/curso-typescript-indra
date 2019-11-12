class Serie {
  constructor(
    public titulo: string,
    public anioEstreno: number,
    public episodios: number,
    public episodiosVistos: number,
    public finalizada: boolean
  ) { }

  verEpisodio() {
    if (!this.vista()) {
      this.episodiosVistos += 1;
    }
  }

  episodiosPorVer() {
    return this.episodios - this.episodiosVistos;
  }

  vista() {
    return this.episodiosPorVer() === 0;
  }

  toString() {
    console.log(`
      Serie ${this.titulo} (${this.anioEstreno}) [${this.finalizada ? 'Cancelada/Finalizada' : 'Continua'}]
      Episodios: ${this.episodiosVistos}/${this.episodios} (Te faltan ${this.episodiosPorVer()})
    `);
  }
}

const s1 = new Serie('Serie 1', 2000, 10, 8, true);
s1.toString();
s1.verEpisodio()
s1.verEpisodio()
s1.toString();
s1.verEpisodio()
s1.toString();
