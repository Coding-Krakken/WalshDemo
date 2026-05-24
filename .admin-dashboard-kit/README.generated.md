# Admin Dashboard Plug-and-Play Kit

Generated assets are in: .admin-dashboard-kit

## Files

- .env.admin-dashboard
- docker-compose.admin-dashboard.sidecar.yml
- reverse-proxy/nginx.admin-dashboard.conf (if selected)
- reverse-proxy/caddy.admin-dashboard.Caddyfile (if selected)

## Selected Configuration

- profile: generic
- auth provider: memory
- host port: 3000
- sidecar port: 4100
- proxy mode: both

## Next Steps

1. Ensure AdminDashboard is present as a submodule at ./admin-dashboard
2. Start sidecar:
   docker compose -f .admin-dashboard-kit/docker-compose.admin-dashboard.sidecar.yml up
3. Wire reverse proxy config from .admin-dashboard-kit/reverse-proxy
4. Validate:
   node admin-dashboard/scripts/verify-plug-and-play-readiness.mjs --base-url=http://localhost:3000 --strict-http
