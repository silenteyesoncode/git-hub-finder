class Github {
  constructor() {
      this.client_id = 'eab5a6d918d7b35053a8';
      this.client_secret = 'b07afb3a6b2171667ccc27e1dd21c6eeb617c064'
      this.repos_count = 5;
      this.repos_sort = `created: asc`;

  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=$
      ${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}
      &sort=${this.repos_sort}&client_id${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();

      return {
        profile,
        repos
      }
  }   
}

