module.exports = {
	name: "rickhenrydev.netlify.app", // optional, falls back to object key
	description: "Rick Henry Development site",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://rickhenrydev.netlify.app/",
		"https://rickhenrydev.netlify.app/plans/",
		"https://rickhenrydev.netlify.app/projects/",
		"https://rickhenrydev.netlify.app/about/",
		"https://rickhenrydev.netlify.app/blog/",
		"https://rickhenrydev.netlify.app/get-started/",
	]
};