class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
  end
end

# id 	int 	not null, unique, primekey
# user_id 	int 	not null, indexed
# post_id 	int 	not null, indexed
# created_at 	datetime 	not null
# updated_at 	datetime 	not null

#     basically a joins table on users and posts
#     user_id references users
#     post_id references posts
#     index on [user_id, post_id] unique: true