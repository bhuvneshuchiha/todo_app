const z = require("zod");

const todoSchema = z.object({

  title: z.string().min(1),
  description: z.string().min(1)
}
)

module.exports = {
  todoSchema
}
