json.extract! user, :id, :username
json.avatarUrl user.avatar.attached? ? url_for(user.avatar) : image_url("rocket_snail_facing_right.png")