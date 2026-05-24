/** @type {import('next').NextConfig} */
const adminSidecarBaseUrl =
	process.env.ADMIN_SIDECAR_BASE_URL ?? "http://localhost:4100";

const nextConfig = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/_next/:path*",
					has: [
						{
							type: "header",
							key: "referer",
							value: ".*/admin.*",
						},
					],
					destination: `${adminSidecarBaseUrl}/_next/:path*`,
				},
				{
					source: "/admin",
					destination: `${adminSidecarBaseUrl}/`,
				},
				{
					source: "/admin/:path*",
					destination: `${adminSidecarBaseUrl}/:path*`,
				},
				{
					source: "/api/admin/:path*",
					destination: `${adminSidecarBaseUrl}/api/admin/:path*`,
				},
			],
		};
	},
};

export default nextConfig;