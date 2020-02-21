class AddLikeCountToPost < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :total_likes, :integer, default: 0
  end
end
