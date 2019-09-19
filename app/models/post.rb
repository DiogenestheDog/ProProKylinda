# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  header     :string
#  body       :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  post_type  :string
#

class Post < ApplicationRecord
    validates :post_type, :user_id, presence: true
    validates :post_type, inclusion: { in: %w(text chat quote photo) }
        # message: "%{value} is not a valid post-type" }

    has_one_attached :image

    belongs_to :user
end
