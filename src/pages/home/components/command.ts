const playMusic = (payload: { music: string }) => {
  alert(payload.music);
};

const commondActionMap = { playMusic };

interface Command {
  type: string;
  payload: object;
}
const commandService = (command: Command) => {
  const fn = commondActionMap[command.type as keyof typeof commondActionMap];
  if (fn) {
    fn(command.payload as Parameters<typeof fn>[0]);
  }
};

commandService({
  type: "playMusic",
  payload: {
    music: "music.mp3",
  },
});

const toolbarButtons = [
  {
    id: "music",
    type: "action",
    props: {
      label: "Music",
      commands: [
        {
          commandName: "playMusic",
        },
      ],
    },
  },
  {
    id: "video",
    type: "action",
    props: {
      label: "Video",
      commands: [
        {
          commandName: "playMusic",
        },
      ],
    },
  },
];
export { toolbarButtons };
export default commandService;
