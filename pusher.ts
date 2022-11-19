import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
	appId: "1509418",
	key: "638b4999874958813324",
	secret: "372cac125c1a235c54ca",
	cluster: "eu",
	useTLS: true,
});

export const clientPusher = new ClientPusher("638b4999874958813324", {
	cluster: "eu",
	forceTLS: true,
});
