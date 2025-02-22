import { Schema, model, Document, Types } from "mongoose";

interface IReaction {
  reactionBody: string;
  username: string;
  createdAt: Date;
}

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: Types.DocumentArray<IReaction>;
  reactionCount: number;
}

const ReactionSchema = new Schema<IReaction>({
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ThoughtSchema = new Schema<IThought>(
  {
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [ReactionSchema],
  },
  { toJSON: { virtuals: true }, id: false }
);

ThoughtSchema.virtual("reactionCount").get(function (this: IThought) {
  return this.reactions?.length || 0;
});

export default model<IThought>("Thought", ThoughtSchema);
