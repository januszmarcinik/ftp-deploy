# GitHub action - FTP Deploy

Deploy your build to any FTP server.

## Example

``` yml
- name: 'Deploy to UAT'
  uses: januszmarcinik/ftp-deploy@test
  with:
    server: 127.0.0.1
    user: my-ftp-user
    password: ${{ secrets.FTP_PASSWORD }}
    localRoot: web/dist
```