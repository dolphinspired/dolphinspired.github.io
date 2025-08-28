const cdnUrl = new URL("https://static.nuffle.me")

export const cdn = (path: string) => new URL(path, cdnUrl);
