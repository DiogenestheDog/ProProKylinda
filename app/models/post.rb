# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  header     :string
#  body       :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
    validates :post_type, :user_id, presence: true

    belongs_to :user
end
